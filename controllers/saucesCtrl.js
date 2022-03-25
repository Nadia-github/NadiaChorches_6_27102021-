const Sauce = require('../models/sauces');

exports.createSauce = (req, res) => {
    delete req.body._id;
    const sauce = new Sauce ({
      ...req.body
    });
    sauce.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré!'}))
      .catch(error => res.status(400).json({error}));
}

exports.findAllSauces = (req, res) => {
  Sauce.find()
  .then(sauces => res.status(201).json(sauces))
  .catch(error => res.status(400).json({error}));
}

exports.findSauce = (req, res) => {
  Sauce.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
}

exports.modifySauce = (req, res) => {
  Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
}

exports.deleteSauce =(req, res) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
}
