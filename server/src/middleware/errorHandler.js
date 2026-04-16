/**
 * Middleware function for error filtering process
 */
export const errorHandler = (error, request, response, next) => {
    // Get the status and error message
    const status = error.status || 500;
    const message = error.message || "Internal Server Error";

    // Send response for debugmode with extra information
    if (debugmode) {
        response.status(status).json({
            name: error.name,
            stack: error.stack,
            message,
            status,
            debugmode,
        });
    } else {
        response.status(status).json({
            name: error.name,
            message,
        });
    }
};
