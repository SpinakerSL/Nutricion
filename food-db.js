const BASE_FOODS=[
['Arroz blanco cocido',130,2.7,28.2,.3],['Avena tradicional',389,16.9,66.3,6.9],['Pan integral',247,13,41,4.2],['Pan marraqueta',279,9,57,1.5],['Papa cocida',87,1.9,20.1,.1],['Camote cocido',90,2,20.7,.2],['Fideos cocidos',158,5.8,30.9,.9],['Quinoa cocida',120,4.4,21.3,1.9],['Lentejas cocidas',116,9,20.1,.4],['Porotos cocidos',127,8.7,22.8,.5],
['Pechuga de pollo cocida',165,31,0,3.6],['Carne vacuno magra cocida',217,26,0,12],['Atun al agua drenado',116,25.5,0,.8],['Salmon cocido',206,22,0,12],['Huevo entero',143,12.6,.7,9.5],['Clara de huevo',52,10.9,.7,.2],['Jamon de pavo',104,17,3,2],
['Leche descremada',35,3.4,5,.1],['Leche entera',61,3.2,4.8,3.3],['Yogurt natural',61,3.5,4.7,3.3],['Yogurt griego natural',97,9,3.9,5],['Quesillo',145,18,3,6.5],['Queso gauda',356,25,2,27],
['Platano',89,1.1,22.8,.3],['Manzana',52,.3,13.8,.2],['Naranja',47,.9,11.8,.1],['Frutilla',32,.7,7.7,.3],['Palta',160,2,8.5,14.7],['Tomate',18,.9,3.9,.2],['Lechuga',15,1.4,2.9,.2],['Brocoli cocido',35,2.4,7.2,.4],['Zanahoria',41,.9,9.6,.2],
['Aceite de oliva',884,0,0,100],['Mantequilla de mani',588,25,20,50],['Almendras',579,21.2,21.6,49.9],['Nueces',654,15.2,13.7,65.2],['Azucar',387,0,100,0],['Miel',304,.3,82.4,0]
].map((x,i)=>({id:'base'+i,name:x[0],kcal:x[1],protein:x[2],carbs:x[3],fat:x[4],serving:100,source:'Base local'}));
