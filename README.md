# Bienvenido
Este proyecto permite generar y descifrar mensajes secretos usando el mismo código que tu cuerpo usa para fabricar proteínas. Inspirado por el libro [Cómo Explicar Genética con un Dragón Mutante](http://bigvanciencia.com/productos/como-explicar-genetica-y-evolucion-con-un-dragon-mutante) de Big Van Científicos sobre Ruedas.

# ¿Cómo se usa el Código Genético para crear Mensajes Secretos?

En un determinado momento de la história del libro "Cómo Explicar Genética con un Dragón Mutante", el científico del grupo explica como crear mensajes secretos usando el código genético.

Aunque solamente usemos 4 letras para identificar las bases del ADN (A, C, T, G) y otras 4 letras para el ARN (A, C, U, G), resulta que nuestras células usan cada secuencia de 3 bases del ARN para identificar los aminoácidos que componen las proteínas. Por ejemplo, GCU añade al aminoácido Alanina, mientras que UGU añade Cisteína. La secuencia de 3 bases del ARN se llama codón.

Lo importante aquí no es saber el nombre de los aminoácidos, sino que hay 20 que se usan para producir proteínas, y cada uno de ellos se identifica una letra diferente.

# Cómo funciona la herramienta

En esta herramienta, usamos el código a continuación para mapear cada letra de tu mensaje.

a = GCU, c = UGU, d = GAU, e = GAA, f = UUU, g= GGU, h = CAU, i = AUU, k = AAA, l = UUA, m = AUG, n = AAU, p = CCU, q = CAA, r = CGU, s = AGU, t = ACU, v = GUU, w = UGG", y = UAU.

En total hay 64 codones o secuencias posibles de 3 bases del ARN, entonces este es un mapeo simplificado, suficiente para atender a nuestras necesidades.

Cuando una letra del mensaje no corresponda a ningún codón, sólo la convertimos a minúscula. Y cuando un caracter del mensaje no sea una letra, la dejamos sin modificar.

# Contribuciones son bienvenidas
¿Quieres contribuir? Adelante con tus Issues o Pull Requests.
