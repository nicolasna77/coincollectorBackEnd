const Coin = require("../models/Coin");

// Créer une nouvelle pièce
exports.createCoin = async (req, res) => {
  try {
    const coin = new Coin(req.body);
    await coin.save();
    res.status(201).json(coin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Lire toutes les pièces
exports.getCoins = async (req, res) => {
  try {
    const coins = await Coin.find();
    res.status(200).json(coins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lire une pièce par son ID
exports.getCoinById = async (req, res) => {
  try {
    const coin = await Coin.findById(req.params.id);
    if (!coin) {
      return res.status(404).json({ error: "Coin not found" });
    }
    res.status(200).json(coin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Mettre à jour une pièce
exports.updateCoin = async (req, res) => {
  try {
    const coin = await Coin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!coin) {
      return res.status(404).json({ error: "Coin not found" });
    }
    res.status(200).json(coin);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Supprimer une pièce
exports.deleteCoin = async (req, res) => {
  try {
    const coin = await Coin.findByIdAndDelete(req.params.id);
    if (!coin) {
      return res.status(404).json({ error: "Coin not found" });
    }
    res.status(200).json({ message: "Coin deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
