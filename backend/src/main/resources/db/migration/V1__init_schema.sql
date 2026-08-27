-- Users
CREATE TABLE users (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    full_name       VARCHAR(150)        NOT NULL,
    email           VARCHAR(150)        NOT NULL UNIQUE,
    password        VARCHAR(255)        NOT NULL,
    phone_number    VARCHAR(30),
    role            VARCHAR(20)         NOT NULL DEFAULT 'CUSTOMER',
    enabled         BOOLEAN             NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Categories (e.g. Flavored, Greek, Plant-Based, Drinking Yoghurt)
CREATE TABLE categories (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    name            VARCHAR(100)        NOT NULL UNIQUE,
    description     VARCHAR(500)
);

-- Products
CREATE TABLE products (
    id                  BIGINT AUTO_INCREMENT PRIMARY KEY,
    name                VARCHAR(150)        NOT NULL,
    description         VARCHAR(1000),
    flavor              VARCHAR(100),
    size                VARCHAR(50),
    price               DECIMAL(10, 2)      NOT NULL,
    stock_quantity      INT                 NOT NULL DEFAULT 0,
    image_url           VARCHAR(500),
    active              BOOLEAN             NOT NULL DEFAULT TRUE,
    category_id         BIGINT,
    created_at          TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_products_category FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE SET NULL
);

-- Cart (one per user)
CREATE TABLE carts (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id         BIGINT              NOT NULL UNIQUE,
    created_at      TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_carts_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Cart items
CREATE TABLE cart_items (
    id              BIGINT AUTO_INCREMENT PRIMARY KEY,
    cart_id         BIGINT              NOT NULL,
    product_id      BIGINT              NOT NULL,
    quantity        INT                 NOT NULL,
    CONSTRAINT fk_cart_items_cart FOREIGN KEY (cart_id) REFERENCES carts (id) ON DELETE CASCADE,
    CONSTRAINT fk_cart_items_product FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE,
    CONSTRAINT uq_cart_product UNIQUE (cart_id, product_id)
);

-- Orders
CREATE TABLE orders (
    id                  BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id             BIGINT              NOT NULL,
    total_amount        DECIMAL(10, 2)      NOT NULL,
    status               VARCHAR(20)         NOT NULL DEFAULT 'PENDING',
    shipping_address     VARCHAR(500)        NOT NULL,
    contact_phone        VARCHAR(30),
    created_at           TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at            TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_orders_user FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Order items (snapshot of product + price at purchase time)
CREATE TABLE order_items (
    id                  BIGINT AUTO_INCREMENT PRIMARY KEY,
    order_id            BIGINT              NOT NULL,
    product_id          BIGINT,
    product_name        VARCHAR(150)        NOT NULL,
    quantity             INT                 NOT NULL,
    price_at_purchase    DECIMAL(10, 2)      NOT NULL,
    CONSTRAINT fk_order_items_order FOREIGN KEY (order_id) REFERENCES orders (id) ON DELETE CASCADE,
    CONSTRAINT fk_order_items_product FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE SET NULL
);

CREATE INDEX idx_products_category ON products (category_id);
CREATE INDEX idx_orders_user ON orders (user_id);
CREATE INDEX idx_order_items_order ON order_items (order_id);
