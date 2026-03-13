export class HealthService {
  getHealth() {
    return {
      status: "ok",
      message: "Express TypeScript MVC app is running"
    };
  }
}
