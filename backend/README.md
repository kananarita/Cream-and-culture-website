# Yoghurt E-Commerce Backend

A Spring Boot REST API for a yoghurt e-commerce platform: product catalog,
categories, cart, checkout/orders, and JWT-based auth with `CUSTOMER` /
`ADMIN` roles.

## Stack

- Java 17, Spring Boot 3.3
- Spring Web, Spring Data JPA, Spring Security
- MySQL 8
- Flyway (schema migrations)
- JWT (jjwt)
- Lombok

## Getting started

### 1. Create the database

You don't need to create the schema by hand — Flyway does that on startup.
You just need the database itself to exist, or let the connection string
create it for you (already configured with `createDatabaseIfNotExist=true`).

Make sure MySQL is running locally, then set your credentials.

### 2. Configure

Edit `src/main/resources/application.properties`, or override via environment
variables:

| Property | Env var | Default |
|---|---|---|
| `spring.datasource.username` | — | `root` |
| `spring.datasource.password` | — | `changeme` |
| `app.jwt.secret` | `JWT_SECRET` | dev placeholder — **change for production** |
| `app.jwt.expiration-ms` | `JWT_EXPIRATION_MS` | `86400000` (24h) |
| `app.cors.allowed-origins` | `CORS_ALLOWED_ORIGINS` | `http://localhost:3000` |

### 3. Run

```bash
mvn spring-boot:run
```

(This project doesn't bundle the Maven wrapper. If you'd rather not install
Maven locally, run `mvn -N wrapper:wrapper` once to generate `mvnw`/`mvnw.cmd`,
or just open the folder in IntelliJ/VS Code — both auto-detect `pom.xml`.)

The API starts on `http://localhost:8080`. Flyway runs `V1__init_schema.sql`
and `V2__seed_data.sql` automatically, creating the schema plus:

- A default admin: `admin@yoghurtshop.com` / `Admin@123` (**change this password immediately**)
- 4 sample categories and 6 sample products

## API overview

### Auth (public)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new customer account |
| POST | `/api/auth/login` | Log in, returns a JWT |

Send the JWT on subsequent requests as `Authorization: Bearer <token>`.

### Catalog (public read)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/categories` | List categories |
| GET | `/api/products` | List products (supports `?categoryId=`, `?search=`, and paging params) |
| GET | `/api/products/{id}` | Get one product |

### Cart (authenticated)
| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/cart` | Get the current user's cart |
| POST | `/api/cart/items` | Add an item `{ productId, quantity }` |
| PUT | `/api/cart/items/{cartItemId}?quantity=` | Update quantity (0 removes it) |
| DELETE | `/api/cart/items/{cartItemId}` | Remove an item |
| DELETE | `/api/cart` | Clear the cart |

### Orders (authenticated)
| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/orders/checkout` | Checkout the current cart `{ shippingAddress, contactPhone }` |
| GET | `/api/orders` | List the current user's orders |
| GET | `/api/orders/{id}` | Get one of the current user's orders |

### Admin (role `ADMIN` only)
| Method | Endpoint | Description |
|---|---|---|
| POST/PUT/DELETE | `/api/admin/categories`, `/api/admin/categories/{id}` | Manage categories |
| POST/PUT/DELETE | `/api/admin/products`, `/api/admin/products/{id}` | Manage products (delete = soft delete) |
| GET | `/api/admin/orders` | List all orders (supports `?status=`) |
| PATCH | `/api/admin/orders/{id}/status` | Update order status `{ status }` |

## Design notes

- **Stock handling**: adding to cart checks current stock; checkout re-checks
  and decrements stock atomically inside the order transaction, so two
  customers racing for the last units can't both succeed.
- **Order history integrity**: `order_items` snapshots `product_name` and
  `price_at_purchase`, and the `product_id` foreign key is `ON DELETE SET
  NULL` — so past orders stay intact even if a product is later removed.
  Product "delete" is a soft delete (`active = false`) for the same reason.
- **Error handling**: a `@RestControllerAdvice` (`GlobalExceptionHandler`)
  turns domain exceptions into proper HTTP status codes (404/409/400/403)
  instead of leaking a generic 500, and `/error` is permitted in
  `SecurityConfig` so those responses aren't swallowed by a 403 first.

## Next steps you may want

- Payment integration (e.g. M-Pesa/Daraja) — not included yet
- Email/OTP verification on registration
- Product image upload (currently just an `imageUrl` string field)
- Refresh tokens (current JWT is a single long-lived access token)
