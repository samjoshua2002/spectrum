import { app } from "../server/app";
import { registerRoutes } from "../server/routes";

// Cache route registration status
let routesRegistered = false;

export default async function handler(req: any, res: any) {
    if (!routesRegistered) {
        await registerRoutes(app);

        // Add error handler after routes are registered
        app.use((err: any, _req: any, res: any, _next: any) => {
            const status = err.status || err.statusCode || 500;
            const message = err.message || "Internal Server Error";
            res.status(status).json({ message });
            throw err;
        });

        routesRegistered = true;
    }

    app(req, res);
}
