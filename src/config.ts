export const config = () => ({
  port: Number(process.env.BACKEND_PORT),
  database: {
    uri: `mongodb://${process.env.DB_ROOT_USERNAME}:${process.env.DB_ROOT_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?authSource=admin`,
  },
});
