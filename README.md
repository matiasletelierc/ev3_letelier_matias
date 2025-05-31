# Landing Page React + Vite

Este repositorio contiene una landing page desarrollada en React y Vite, gestionada colaborativamente con Git y GitHub.

---

## 📦 Estructura del Proyecto

```
/
├── public/
├── src/
│   ├── components/
│   │   ├── FloatingServiceCard.jsx
│   │   ├── ProductCarousel.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── QuienesSomos.jsx
│   │   └── PreguntasFrecuentes.jsx
│   ├── data/
│   │   └── productosData.js
│   ├── pages/
│   │   └── Services.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── README.md
└── vite.config.js
```

---

## 🚀 Instalación

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/matiasletelierc/ev3_letelier_matias
   cd landingpage-react-vite
   ```

2. **Instala las dependencias:**

   ```sh
   npm install
   ```

3. **Inicia el servidor de desarrollo:**
   ```sh
   npm run dev
   ```

---

## 🤝 Desarrollo Colaborativo con Git y GitHub

- **Ramas:**  
  Crea una rama por cada funcionalidad:

  ```sh
  git checkout -b feature/nueva-funcionalidad
  ```

- **Commits:**  
  Realiza commits descriptivos:

  ```sh
  git commit -m "Agrega componente ServiceCard"
  ```

- **Pull Requests:**  
  Sube tu rama y crea un Pull Request en GitHub para revisión antes de fusionar a `main`.

- **Documentación de cambios:**  
  Describe los cambios en cada PR y utiliza el historial de commits para seguimiento.

---

## 🧩 Guía de Uso de Componentes

### 1. ServiceCard

Muestra información de un producto o servicio.

```jsx
import ServiceCard from "./components/ServiceCard";

<ServiceCard
  image={producto.imgs[0]}
  title={producto.nombre}
  description={producto.descripcion}
  product={producto.nombre}
  tallas={producto.tallas}
  colores={producto.colores}
  precio={producto.precio}
/>;
```

### 2. ProductCarousel

Carrusel de productos destacados.

```jsx
import ProductCarousel from "./components/ProductCarousel";

<ProductCarousel />;
```

### 3. FloatingServiceCard

Tarjeta flotante para contacto rápido.

```jsx
import FloatingServiceCard from "./components/FloatingServiceCard";

<FloatingServiceCard
  image={producto.imgs[0]}
  title={producto.nombre}
  product={producto.nombre}
/>;
```

---

## 📢 Repositorio Público

Comparte este repositorio en GitHub para facilitar la colaboración y la revisión de código:  
[https://github.com/matiasletelierc/ev3_letelier_matias](https://github.com/matiasletelierc/ev3_letelier_matias)

---

## 📋 Ejemplo de Pull Request

1. Realiza cambios en tu rama.
2. Sube la rama:
   ```sh
   git push origin feature/nueva-funcionalidad
   ```
3. Abre un Pull Request en GitHub y solicita revisión.
4. Describe los cambios realizados y espera la aprobación antes de fusionar.

---

## 📞 Soporte

Para dudas o sugerencias, abre un Issue en el repositorio o contacta a los administradores del proyecto.
