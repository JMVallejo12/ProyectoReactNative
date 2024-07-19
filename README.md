# Proyecto Final para el curso de React Native

## Explicación:
Este es un E-commerce basado en un proyecto de ReactJS realizado anteriormente, cuenta 9 artículos, y 3 categorías, con un total de 3 artículos por categoría.
En la pantalla de inicio, están las categorías y una sección debajo para mostrar todos los artículos del catálogo.
En la pantalla del carrito se podrá modificar la cantidad de existencias que se quieren comprar, y luego se agregan a una orden.
La orden que se genera, es una orden única para cada artículo, que contiene el precio total, dependiendo de la cantidad de los items comprados.

## Dependencias:
React-navigation (stack y tabs)
expo
firebase
react-native-screens
react-native-safe-area-context
react-native-keyboard-aware-scroll-view (para evitar el desacomodo de los elementos cuando aparezca el teclado en pantalla)
react-redux
expo-file-system
expo-image-picker
reduxjs/toolkit

## Navegacion: 
Se utiliza la navegación en stack y en tabs, para cambiar entre las pantallas. En el tab navigator se puede cambiar entre las cuatro pantallas importantes, que son Tienda, Carrito, Orden y Mi perfil

## Tienda: 
En la tienda están disponibles las categorías, para mirar una categoría específica.

## Carrito:
En el carrito se pueden ver los artículos que se agregan al mismo desde la tienda, se utiliza Redux para el manejo de datos globales, por lo tanto, si se reinicia la App, el carrito será reseteado.

## Orden: 
En la pantalla de las órdenes, se pueden ver dos grupos, las órdenes pendientes y las órdenes confirmadas, las órdenes confirmadas, están en la base de datos de Firebase, y el componente de las mismas se puede actualizar se puede refrescar deslizando el dedo hacia abajo.

## Mi perfil: 
En esta pantalla se puede tomar una foto de perfil, utilizando la cámara del dispositivo, ajustada la calidad en 0,1, para evitar problemas de rendimiento.
