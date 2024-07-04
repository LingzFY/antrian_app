import { apiHandler } from "helpers/api";

export default apiHandler(handler);

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getData();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getData() {
    try {
    } catch (e) {
      res.status(400).json({
        success: false,
        message: e.message,
      });
    }
  }
}
