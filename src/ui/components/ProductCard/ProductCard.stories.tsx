import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
    title: "UI/ProductCard",
    component: ProductCard,
    decorators: [
        (Story) => (
            <ul className="w-[300px] border border-gray-200 rounded-lg p-4">
                <Story />
            </ul>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
    args: {
        product: {
            id: 1,
            sku: "MOB-APP-APP-101",
            title: "iPhone 14 Pro",
            price: 999.99,
            discountPercentage: 12.5,
            thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2016%20Pro/thumbnail.png",
            finalPrice: 874.99,
        },
    },
};

export const HighDiscount: Story = {
    args: {
        product: {
            id: 1,
            sku: "ELEC-TV-001",
            title: 'Smart TV 55" 4K Ultra HD',
            price: 1200,
            discountPercentage: 50,
            thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2016%20Pro/thumbnail.png",
            finalPrice: 600,
        },
    },
};

export const NoDiscount: Story = {
    args: {
        product: {
            id: 1,
            sku: "ACC-CASE-001",
            title: "Funda protectora",
            price: 29.99,
            discountPercentage: 0,
            thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2016%20Pro/thumbnail.png",
            finalPrice: 29.99,
        },
    },
};

export const LongTitle: Story = {
    args: {
        product: {
            id: 1,
            sku: "COMP-KEYB-001",
            title: "Teclado mecánico inalámbrico RGB con switches Cherry MX Blue y reposamuñecas ergonómico de memoria",
            price: 189.99,
            discountPercentage: 15,
            thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2016%20Pro/thumbnail.png",
            finalPrice: 161.49,
        },
    },
};
