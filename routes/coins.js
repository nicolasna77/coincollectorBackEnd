const express = require("express");
const router = express.Router();
const coinController = require("../controllers/coinController");
const generateFakeCoins = require("../fakeData");

router.get("/fake", (req, res) => {
  const coins = generateFakeCoins(10); // Génère 10 fausses pièces
  res.json(coins);
});
// Routes CRUD pour les pièces
router.post("/", coinController.createCoin);
router.get("/", coinController.getCoins);
router.get("/:id", coinController.getCoinById);
router.put("/:id", coinController.updateCoin);
router.delete("/:id", coinController.deleteCoin);

module.exports = router;
