ba# Variable "graus"(direcció de la brúixola)
graus = float(input("Introdueix els graus: "))

# Normalitzem entre 0 i 360
graus = graus % 360

# Determinem el punt cardinal
if (graus >= 315 or graus < 45):
direccio = "N"
elif(graus >= 45 and graus < 135):
direccio = "E"
elif(graus >= 135 and graus < 225):
direccio = "S"
else:
direccio = "O"

print("Direcció:", direccio)sic.forever(function () {
	
})
