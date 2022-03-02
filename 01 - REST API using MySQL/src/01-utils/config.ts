class Config {

}

class DevelopmentConfig extends Config {
    public isdevelopment = true;
    public mysql = { host: "localhost", user: "root", password: "", database: "Northwind" };
}

class ProductionConfig extends Config {
    public isdevelopment = false;
    public mysql = { host: "eu-cdbr-west-02.cleardb.net", user: "bcbc70a745ad83", password: "04d24ab6", database: "heroku_a8f9ec6683669a9" };
}

const config = process.env.NODE_ENV === "production" ? new ProductionConfig() : new DevelopmentConfig();

export default config;
