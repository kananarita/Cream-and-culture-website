-- Default admin account. Password is "Admin@123" (BCrypt hash below).
-- CHANGE THIS PASSWORD immediately after first login in any real deployment.
INSERT INTO users (full_name, email, password, phone_number, role, enabled)
VALUES ('System Admin', 'admin@yoghurtshop.com',
        '$2b$10$yTsdxE60f4GCoySZiWH1XuB5TlR0vX4wAB/p7dKD1mxoNLIdJQquK', '0700000000', 'ADMIN', TRUE);

INSERT INTO categories (name, description) VALUES
    ('Flavored Yoghurt', 'Fruit and flavored yoghurt cups and bottles'),
    ('Greek Yoghurt', 'Thick, strained, high-protein yoghurt'),
    ('Drinking Yoghurt', 'Smooth, pourable yoghurt drinks'),
    ('Plant-Based Yoghurt', 'Dairy-free yoghurt alternatives');

INSERT INTO products (name, description, flavor, size, price, stock_quantity, image_url, active, category_id) VALUES
    ('Classic Strawberry Yoghurt', 'Creamy yoghurt with real strawberry pulp', 'Strawberry', '500ml', 180.00, 100, NULL, TRUE, 1),
    ('Mango Delight Yoghurt', 'Tropical mango flavored yoghurt', 'Mango', '500ml', 180.00, 100, NULL, TRUE, 1),
    ('Plain Greek Yoghurt', 'Thick and creamy, unsweetened', 'Plain', '450g', 250.00, 60, NULL, TRUE, 2),
    ('Honey Greek Yoghurt', 'Greek yoghurt swirled with honey', 'Honey', '450g', 270.00, 60, NULL, TRUE, 2),
    ('Passion Drinking Yoghurt', 'Smooth passion fruit yoghurt drink', 'Passion', '1L', 220.00, 80, NULL, TRUE, 3),
    ('Vanilla Oat Yoghurt', 'Dairy-free oat-based yoghurt', 'Vanilla', '400g', 300.00, 40, NULL, TRUE, 4);
