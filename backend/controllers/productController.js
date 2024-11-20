
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
