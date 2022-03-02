// Development + Production configurations
class Config {
    // public supportPhone = "031234567";
}

// Development configuration:
class DevelopmentConfig extends Config {
    public productsUrl = "http://localhost:3001/api/products/";
    public productsImageUrl = "http://localhost:3001/api/products/images/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public loginUrl = "http://localhost:3001/api/auth/login/";
}

// Production configuration:
class ProductionConfig extends Config {
    public productsUrl = "https://northwind-by-eran.herokuapp.com/api/products/";
    public productsImageUrl = "https://northwind-by-eran.herokuapp.com/api/products/images/";
    public registerUrl = "https://northwind-by-eran.herokuapp.com/register/";
    public loginUrl = "https://northwind-by-eran.herokuapp.com/api/auth/login/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig();

export default config;
