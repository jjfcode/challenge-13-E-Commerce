const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
    try {
        const locationData = await Category.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    try {
        const locationData = await Category.findByPk(req.params.id, {
            include: [{ model: Product, through: Trip, as: 'category_product' }]
        });

        if (!locationData) {
          res.status(404).json({ message: 'No category found with this id!' });
          return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
      }
});

router.post('/', async (req, res) => {
  // create a new category
    try {
        const locationData = await Category.create(req.body);
        res.status(200).json(locationData);
    } catch (err) {
        res.status(400).json(err);
      }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!locationData) {
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;