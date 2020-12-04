import { Router } from "express"; // Import router from express.

const router: Router = Router(); // Assign router method.

/**
 *
 * ROUTE
 *
 * */

import { index } from "../controller/dataController";

// Get data route.
router.get("/data", index);

export default router;
