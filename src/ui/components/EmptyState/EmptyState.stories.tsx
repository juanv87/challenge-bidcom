import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EmptyState } from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
    title: "UI/EmptyState",
    component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
    args: {
        categories: [
            { slug: "smartphones", name: "Smartphones" },
            { slug: "laptops", name: "Laptops" },
            { slug: "fragrances", name: "Fragrances" },
            { slug: "skincare", name: "Skincare" },
            { slug: "groceries", name: "Groceries" },
        ],
    },
};

export const NoCategories: Story = {
    args: {
        categories: [],
    },
};

export const MultipleCategories: Story = {
    args: {
        categories: [
            { slug: "smartphones", name: "Smartphones" },
            { slug: "laptops", name: "Laptops" },
            { slug: "fragrances", name: "Fragrances" },
            { slug: "skincare", name: "Skincare" },
            { slug: "groceries", name: "Groceries" },
            { slug: "home-decoration", name: "Home Decoration" },
            { slug: "furniture", name: "Furniture" },
            { slug: "lighting", name: "Lighting" },
            { slug: "kitchen-ware", name: "Kitchen Ware" },
            { slug: "tableware", name: "Tableware" },
        ],
    },
};

export const FewCategories: Story = {
    args: {
        categories: [
            { slug: "smartphones", name: "Smartphones" },
            { slug: "laptops", name: "Laptops" },
        ],
    },
};

export const SingleCategory: Story = {
    args: {
        categories: [
            { slug: "smartphones", name: "Smartphones" },
        ],
    },
};
