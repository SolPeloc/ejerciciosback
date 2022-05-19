
--creacion de tabla productos--
create table productos(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre TEXT,
    descripcion TEXT

);
select * from productos; --selecciona la tabla y te muestra lo que tiene--
insert into productos (nombre,descripcion) values ("pollera charly","gamuzado");--creacion de items con sus valores--
update productos set nombre ="buzo chiara" where nombre = "buzo clara";--modifica un item --
delete from productos where id="3";--borra un item por su id--

truncate productos; --borra lo que esta dentro de la tabla--

