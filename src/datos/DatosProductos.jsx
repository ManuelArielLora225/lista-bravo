import { v4 as uuidv4 } from 'uuid';

export const DatosProductos = [
  // Aceites
  { nombre: "Aceite oliva bravo", medida: "17 oz", precio: 365, categoria: ["Aceites y grasas", "Todos"], id: uuidv4(), id: uuidv4()},
  { nombre: "Aceite oliva bravo", medida: "8.5 oz", precio: 195, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite oliva mediterráneo bravo", medida: "8.5 oz", precio: 99, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite oliva mediterráneo bravo", medida: "17 oz", precio: 149, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite de oliva bravo", medida: "5L", precio: 3000, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite soya bravo", medida: "50.72 oz", precio: 200, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite soya bravo", medida: "64 oz", precio: 250, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite girasol bravo", medida: "50.72 oz", precio: 240, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  { nombre: "Aceite girasol bravo", medida: "96 oz", precio: 440, categoria: ["Aceites y grasas", "Todos"], id: uuidv4()},
  
  // Condimentos
  { nombre: "Mayonesa bravo", medida: "14 oz", precio: 130, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Mayonesa sriracha bravo", medida: "13.75 oz", precio: 110, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Ketchup bravo", medida: "20 oz", precio: 105, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Ketchup sin azúcar", medida: "20 oz", precio: 180, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Ketchup picante bravo", medida: "20 oz", precio: 170, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Caso gallina bravo", medida: "12 tabletas", precio: 50, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Sazón completo bravo", medida: "8 oz", precio: 50, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Vinagre blanco bravo", medida: "107 oz", precio: 100, categoria: ["Condimentos","Todos"], id: uuidv4() },
  { nombre: "Vinagre blanco", medida: "18 oz", precio: 25, categoria: ["Condimentos","Todos"], id: uuidv4() },
  
  // Panadería
  { nombre: "Pan blanco", medida: "25 rebanadas", precio: 99, categoria: ["Panadería" ,"Todos"], id: uuidv4()},
  { nombre: "Pan integral", medida: "25 rebanadas", precio: 99, categoria: ["Panadería" ,"Todos"], id: uuidv4()},
  { nombre: "Pan de papa", medida: "25 rebanadas", precio: 100, categoria: ["Panadería" ,"Todos"], id: uuidv4()},
  { nombre: "Pan de linaza", medida: "25 rebanadas", precio: 110, categoria: ["Panadería" ,"Todos"], id: uuidv4()},
  { nombre: "Pan de brioche", medida: "25 rebanadas", precio: 200, categoria: ["Panadería" ,"Todos"], id: uuidv4()},
  
  // Lácteos
  { nombre: "Mantequilla margarita intenso", medida: "15 oz", precio: 99, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Mantequilla margarita", medida: "1 unidad", precio: 120, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Leche evaporada", medida: "315g", precio: 50, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Leche", medida: "1 cartón", precio: 60, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Leche sin lactosa", medida: "1 cartón", precio: 70, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Leche bajo grasa", medida: "1 cartón", precio: 60, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Leche almendra", medida: "1 cartón", precio: 120, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  { nombre: "Helado", medida: "1 cubo", precio: 400, categoria: ["Lácteos" ,"Todos"], id: uuidv4()},
  
  // Enlatados
  { nombre: "Atún trozos aceite bravo", medida: "6 oz", precio: 100, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Atún trozos en salsa de tomate bravo", medida: "6 oz", precio: 100, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Atún trozos agua bravo", medida: "6 oz", precio: 100, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Sardinas en salsa de tomate bravo", medida: "15 oz", precio: 60, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Sardinas en agua", medida: "15 oz", precio: 60, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Pechuga de pollo trozos en agua", medida: "5 oz", precio: 80, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Pierna de pollo trozos en agua", medida: "5 oz", precio: 80, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  { nombre: "Pechuga de pavo trozos en agua", medida: "5 oz", precio: 80, categoria: ["Enlatados" ,"Todos"], id: uuidv4()},
  
  // Pastas y arroz
  { nombre: "Macarrones con queso", medida: "7.25 oz", precio: 40, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  { nombre: "Salsa pasta hongos", medida: "24 oz", precio: 130, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  { nombre: "Pasta lasagna bravo", medida: "17.6 oz", precio: 79, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  { nombre: "Spagueti bravo", medida: "14.11 oz", precio: 30, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  { nombre: "Coditos bravo", medida: "14.11 oz", precio: 35, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  { nombre: "Arroz premium", medida: "5 Libras", precio: 170, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  { nombre: "Arroz premium", medida: "10 Libras", precio: 340, categoria: ["Pastas y arroz" ,"Todos"], id: uuidv4() },
  
  // Legumbres
  { nombre: "Arveja", medida: "24 oz", precio: 50, categoria: ["Legumbres" ,"Todos"], id: uuidv4() },
  { nombre: "Guandules", medida: "24 oz", precio: 170, categoria: ["Legumbres" ,"Todos"], id: uuidv4() },
  { nombre: "Habichuela roja", medida: "24 oz", precio: 130, categoria: ["Legumbres" ,"Todos"], id: uuidv4() },
  { nombre: "Habichuela pinta", medida: "24 oz", precio: 100, categoria: ["Legumbres" ,"Todos"], id: uuidv4() },
  { nombre: "Habichuela negra", medida: "24 oz", precio: 100, categoria: ["Legumbres" ,"Todos"], id: uuidv4() },
  
  // Snacks
  { nombre: "Popcorn", medida: "24 oz", precio: 60, categoria: ["Snacks" ,"Todos"], id: uuidv4() },
  { nombre: "Galletas María", medida: "800g", precio: 140, categoria: ["Snacks" ,"Todos"], id: uuidv4() },
  { nombre: "Casabe albahaca", medida: "10 oz", precio: 100, categoria: ["Snacks" ,"Todos"], id: uuidv4() },
  { nombre: "Casabe", medida: "10 oz", precio: 100, categoria: ["Snacks" ,"Todos"], id: uuidv4() },
  
  // Untables
  { nombre: "Crema avellana", medida: "400g", precio: 170, categoria: ["Untables" ,"Todos"], id: uuidv4() },
  { nombre: "Mermelada de fresa", medida: "11.6 oz", precio: 110, categoria: ["Untables" ,"Todos"], id: uuidv4() },
  { nombre: "Mantequilla de maní", medida: "16 oz", precio: 120, categoria: ["Untables" ,"Todos"], id: uuidv4() },
  { nombre: "Mermelada de mango", medida: "400g", precio: 110, categoria: ["Untables" ,"Todos"], id: uuidv4() },
  
  // Harinas
  { nombre: "Harina pancake", medida: "1.5 Libras", precio: 130, categoria: ["Harinas" ,"Todos"], id: uuidv4() },
  { nombre: "Harina pancake avena", medida: "1.5 Libras", precio: 130, categoria: ["Harinas" ,"Todos"], id: uuidv4() },
  { nombre: "Harina", medida: "2.2 Libras", precio: 50, categoria: ["Harinas" ,"Todos"], id: uuidv4() },
  { nombre: "Harina maíz", medida: "2.2 Libras", precio: 89, categoria: ["Harinas" ,"Todos"], id: uuidv4() },
  
  // Bebidas
  { nombre: "Cocoa dulce", medida: "14 oz", precio: 120, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cocoa simple", medida: "7 oz", precio: 180, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cocoa amarga", medida: "7 oz", precio: 160, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Fresa polvo", medida: "7 oz", precio: 90, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Té negro", medida: "20 bolsas", precio: 80, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Café bravo", medida: "1/2 libra", precio: 110, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Café pumkin", medida: "12 oz", precio: 200, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Café canela", medida: "12 oz", precio: 200, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Café granos", medida: "12 oz", precio: 240, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Café vainilla", medida: "12 oz", precio: 200, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cremora crema", medida: "11 oz", precio: 180, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cremora avellanas", medida: "15 oz", precio: 230, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cremora vainilla", medida: "15 oz", precio: 230, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cremora crema", medida: "22 oz", precio: 260, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  { nombre: "Cremora crema", medida: "6 oz", precio: 120, categoria: ["Bebidas" ,"Todos"], id: uuidv4() },
  
  // Papel y plástico
  { nombre: "Servilletas compactas cuadradas", medida: "250 und", precio: 100, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Servilletas compactas", medida: "500 und", precio: 100, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Papel toalla pre-cortado", medida: "2 pack", precio: 100, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Papel toalla ultraabsorbente", medida: "75 hojas", precio: 120, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Funda baño", medida: "25 und", precio: 60, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Funda cocina", medida: "12 und", precio: 60, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Funda galones", medida: "5 und", precio: 60, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Bolsa cierre deslizante", medida: "12 und", precio: 120, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Bolsas cierre deslizante sandwich", medida: "50 und", precio: 130, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Envoltura flexible plástico", medida: "200 pies", precio: 100, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Papel aluminio", medida: "25 pies", precio: 60, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Vaso rígido", medida: "7oz 50 und", precio: 150, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Papel de baño", medida: "12 und", precio: 380, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  { nombre: "Papel de baño", medida: "4 und", precio: 130, categoria: ["Papel y plástico" ,"Todos"], id: uuidv4() },
  
  // Bebé
  { nombre: "Compota", medida: "113g", precio: 25, categoria: ["Bebé" ,"Todos"], id: uuidv4() },
  { nombre: "Toallitas húmedas bebés", medida: "40 und", precio: 40, categoria: ["Bebé" ,"Todos"], id: uuidv4() },
  { nombre: "Pampers", medida: "1 paquete", precio: 250, categoria: ["Bebé" ,"Todos"], id: uuidv4() },
  
  // Higiene personal
  { nombre: "Bravo jabón avena", medida: "3 pack", precio: 90, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Jabón miel", medida: "3 pack", precio: 90, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Bravo rasuradora", medida: "5 und", precio: 89, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Bravo rasuradora mujer", medida: "2 und", precio: 89, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Protector de cama", medida: "60x90cm 20 und", precio: 200, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Discos algodón", medida: "100 und", precio: 80, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Enjuague bucal menta fresca", medida: "500ml", precio: 130, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Shampoo", medida: "1 galón", precio: 130, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  { nombre: "Jabón manos líquido", medida: "500ml", precio: 110, categoria: ["Higiene personal" ,"Todos"], id: uuidv4() },
  
  // Limpieza
  { nombre: "Lavaplatos", medida: "720ml", precio: 65, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Lavaplatos", medida: "1 galón", precio: 210, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Lavaplatos aloevera", medida: "720ml", precio: 65, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Lavaplatos aloevera", medida: "1 galón", precio: 210, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Lavaplatos limón", medida: "720ml", precio: 65, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Lavaplatos limón", medida: "1 galón", precio: 210, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Bola azul", medida: "4 und", precio: 100, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Esponja salvauñas", medida: "1 unidad", precio: 35, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Esponja", medida: "1 unidad", precio: 35, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiacristales", medida: "740ml", precio: 75, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiacristales", medida: "2 litros", precio: 130, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador multiuso", medida: "2 litros", precio: 130, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador multiuso", medida: "740ml", precio: 75, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Vinagre limpiar", medida: "950ml", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Vinagre limpiar", medida: "2 litros", precio: 150, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Desengrasante", medida: "950ml", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Desengrasante", medida: "2 litros", precio: 160, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpia inodoros", medida: "700ml", precio: 70, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador polvo", medida: "450ml", precio: 30, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador de horno", medida: "450ml", precio: 90, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Detergente polvo", medida: "10 libras", precio: 330, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Detergente en polvo", medida: "5 lb", precio: 170, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Cloro", medida: "1 galón", precio: 80, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Cloro limón", medida: "70 oz", precio: 70, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador de vegetales", medida: "1 litro", precio: 130, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador bebé", medida: "1 galón", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador bebé", medida: "2 litros", precio: 75, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador lavanda", medida: "2 litros", precio: 75, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador lavanda", medida: "1 galón", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador pino", medida: "2 litros", precio: 75, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador pino", medida: "1 galón", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador floral", medida: "2 litros", precio: 70, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Limpiador floral", medida: "1 galón", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Jabón ropa", medida: "2 litros", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Jabón ropa", medida: "1 galón", precio: 200, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Suavizante bebé", medida: "2 litros", precio: 100, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Suavizante bebé", medida: "1 galón", precio: 190, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Suavizante algodón", medida: "1 galón", precio: 190, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Suavizante primaveral", medida: "2 litros", precio: 100, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Suavizante primaveral", medida: "1 galón", precio: 190, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Detergente líquido", medida: "2 litros", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Detergente líquido", medida: "1 galón", precio: 200, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  { nombre: "Detergente polvo", medida: "2 libras", precio: 110, categoria: ["Limpieza" ,"Todos"], id: uuidv4() },
  
  // Cárnicos
  { nombre: "Huevos", medida: "30 und", precio: 200, categoria: ["Cárnicos" ,"Todos"], id: uuidv4() },
  { nombre: "Bravo salami", medida: "2 litros", precio: 140, categoria: ["Cárnicos" ,"Todos"], id: uuidv4() },
  { nombre: "Salami artesanal", medida: "1.25 libras", precio: 250, categoria: ["Cárnicos" ,"Todos"], id: uuidv4() },
  { nombre: "Salami artesanal", medida: "2.4 libras", precio: 450, categoria: ["Cárnicos" ,"Todos"], id: uuidv4() }
];

