# Clean Architecture

Aplicación de búsqueda de productos construida con **Next.js 16**, **React 19** y **TypeScript**, siguiendo principios de **Clean Architecture**.

## Stack Tecnológico

- **Framework:** Next.js 16 (App Router + Server Components)
- **UI:** React 19, Tailwind CSS v4
- **Testing:** Jest 30, Testing Library
- **Component Development:** Storybook 10
- **Lenguaje:** TypeScript 5

---

## Cómo correr el proyecto

### Requisitos previos

- Node.js >= 20
- Yarn

### Instalación

```bash
cd frontend
yarn install
```

### Desarrollo

```bash
yarn dev
```

Navegar a [http://localhost:3000](http://localhost:3000).

### Tests

```bash
# Correr todos los tests
yarn test

# Modo watch (re-ejecuta al guardar)
yarn test:watch
```

### Storybook

```bash
yarn storybook
```

Navegar a [http://localhost:6006](http://localhost:6006).

### Build de producción

```bash
yarn build
yarn start
```

---

## Arquitectura

```
src/
├── domain/              # Capa de Dominio (la más interna)
│   ├── entities/        # Product, Category
│   └── repositories/    # IProductRepository (interfaz/contrato)
│
├── application/         # Capa de Aplicación
│   └── use-cases/       # SearchProducts, GetCategories, GetProductsByCategory
│
├── infrastructure/      # Capa de Infraestructura
│   ├── mappers/         # toProduct(), toCategory() — transforman datos crudos a entidades
│   └── repositories/    # DummyJSONProductRepository (implementación concreta)
│
├── ui/                  # Capa de Presentación
│   ├── components/      # ProductCard, SearchBar, EmptyState, Header, etc.
│   └── icons/           # SearchIcon
│
├── lib/                 # Composition Root
│   └── container.ts     # Inyección de dependencias (conecta las capas)
│
└── app/                 # Next.js App Router (rutas y páginas)
    ├── page.tsx          # Home — lista de productos por defecto
    ├── search/           # Búsqueda por query string (?s=...)
    ├── category/[slug]/  # Productos filtrados por categoría
    ├── error.tsx         # Error boundary global
    └── loading.tsx       # Skeleton loading (Suspense automático)
```

## Testing

### Estrategia

Se priorizaron los tests unitarios en las capas de **Application** (Use Cases) e **Infrastructure** (Mappers), ya que contienen la lógica más testeable y valiosa:

| Capa | Archivo | Qué se testea |
|---|---|---|
| Infrastructure | `product.mapper.test.ts` | Mapeo correcto de datos crudos a entidades, redondeo de `finalPrice` |
| Infrastructure | `category.mapper.test.ts` | Mapeo de categorías |
| Application | `search-products.test.ts` | Que el Use Case delega correctamente al repositorio con los parámetros esperados |
| Application | `get-categories.test.ts` | Que retorna máximo 5 categorías (`slice`), maneja arrays vacíos y menores a 5 |
| Application | `get-products-by-category.test.ts` | Delegación correcta al repositorio |

### Patrón de testing

Los tests de Use Cases usan **mocks manuales** del repositorio. Se inyecta un objeto que implementa `IProductRepository` con `jest.fn()`, lo que permite verificar las llamadas sin hacer requests HTTP reales:

```typescript
const mockRepository: IProductRepository = {
    searchProducts: jest.fn(),
    getCategories: jest.fn(),
    getProductsByCategory: jest.fn(),
};
```

---

## Storybook

Se documentaron los componentes principales con Storybook para desarrollo visual aislado:

- **ProductCard:** Default, HighDiscount, NoDiscount, LongTitle
- **EmptyState:** Default, NoCategories, MultipleCategories, FewCategories, SingleCategory

---

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Home — muestra productos por defecto |
| `/search?s=query` | Resultados de búsqueda. Si no hay resultados, muestra `EmptyState` con categorías sugeridas |
| `/category/[slug]` | Productos filtrados por categoría |

---
