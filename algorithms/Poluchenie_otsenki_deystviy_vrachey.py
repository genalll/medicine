from array import *
import random

doctorvisits = [0]*11
doctorrating = [0]*11
doctorpercentrating = [0]*11
visitssum = 0

#получаем информацию о кол-во посетителей
for x in range(300):
	if a[x][4] == 1:
		doctorvisits[1] = doctorvisits[1] + 1
	elif a[x][4] == 2:
		doctorvisits[2] = doctorvisits[2] + 1
	elif a[x][4] == 3:
		doctorvisits[3] = doctorvisits[3] + 1
	elif a[x][4] == 4:
		doctorvisits[4] = doctorvisits[4] + 1
	elif a[x][4] == 5:
		doctorvisits[5] = doctorvisits[5] + 1
	elif a[x][4] == 6:
		doctorvisits[6] = doctorvisits[6] + 1
	elif a[x][4] == 7:
		doctorvisits[7] = doctorvisits[7] + 1
	elif a[x][4] == 8:
		doctorvisits[8] = doctorvisits[8] + 1
	elif a[x][4] == 9:
		doctorvisits[9] = doctorvisits[9] + 1
	else: doctorvisits[10] = doctorvisits[10] + 1
#получаем информацию о оценке пациентов
for x in range(300):
		doctorrating[a[x][4]] = doctorrating[a[x][4]] - 2 + a[x][14] + a[x][15] + a[x][16] + a[x][17] + a[x][18] + a[x][19]

for x in range(10):
	doctorpercentrating[x+1] = doctorrating[x+1] / doctorvisits[x+1] * 50

for x in range(10):
	print("У доктора номер", x+1,"-", doctorvisits[x+1],"пациентов и имеет рейтинг -", doctorpercentrating[x+1],"%")
