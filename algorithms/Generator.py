from array import *
import random

a = [ [0]*30 for i in range(300) ]

personalid = 1 # Персональный анонимный номер больного

for x in range(300):
    a[x][0] = personalid 
    personalid  += 1

# Обьективность
for x in range(300):
	tf = random.randint(1, 10)
	if tf == 1:
		a[x][1] = 0
	else:
		a[x][1] = 1

# Пол
for x in range(300):
	tf = random.randint(1, 2)
	if tf == 1:
		a[x][2] = 1
	else:
		a[x][2] = 2	

# Возраст
for x in range(300):
	age = random.randint(18, 70)
	a[x][3] = age

# id врача
for x in range(300):
	pranddoctorid = round(random.gauss(0, 2.5) + 5)
	if pranddoctorid <=1:
		a[x][4] = 1
	elif pranddoctorid <=2:
		a[x][4] = 2
	elif pranddoctorid <=3:
		a[x][4] = 3
	elif pranddoctorid <=4:
		a[x][4] = 4
	elif pranddoctorid <=5:
		a[x][4] = 5
	elif pranddoctorid <=6:
		a[x][4] = 6
	elif pranddoctorid <=7:
		a[x][4] = 7
	elif pranddoctorid <=8:
		a[x][4] = 8
	elif pranddoctorid <=9:
		a[x][4] = 9
	else: a[x][4] = 10

# общая оценка заведения

for x in range(300):
	randraiting = random.randint(1,100)
	randquestion = random.randint(1,9)
	if randraiting <= 82:
		a[x][4+randquestion] = 2
	else: a[x][4+randquestion] = 1

for x in range(300):

	randquestionnum = random.randint(1,5)
	randquestionnum1 = randquestionnum + 1
	randraiting = random.randint(1,100)
	randraiting1 = random.randint(1,100)


	if a[x][4] == 1:
		if randraiting<=85:
			a[x][13+randquestionnum] = 2
		else: a[x][13+randquestionnum] = 1
		if randraiting1<=85:
			a[x][13+randquestionnum1] = 2
		else: a[x][13+randquestionnum1] = 1

	elif a[x][4] == 2:
		if randraiting<=90:
			a[x][13+randquestionnum] = 2
		else: a[x][13+randquestionnum] = 1
		if randraiting1<=90:
			a[x][13+randquestionnum1] = 2
		else: a[x][13+randquestionnum1] = 1

	elif a[x][4] == 5:
		if randraiting<=95:
			a[x][13+randquestionnum] = 2
		else: a[x][13+randquestionnum] = 1
		if randraiting1<=95:
			a[x][13+randquestionnum1] = 2
		else: a[x][13+randquestionnum1] = 1

	elif a[x][4] == 3 or a[x][4] == 8 or a[x][4] == 4:
		if randraiting<=98:
			a[x][13+randquestionnum] = 2
		else: a[x][13+randquestionnum] = 1
		if randraiting1<=98:
			a[x][13+randquestionnum1] = 2
		else: a[x][13+randquestionnum1] = 1

	elif a[x][4] == 7 or a[x][4] == 6 or a[x][4] == 9:
		if randraiting<=99:
			a[x][13+randquestionnum] = 2
		else: a[x][13+randquestionnum] = 1
		if randraiting1<=99:
			a[x][13+randquestionnum1] = 2
		else: a[x][13+randquestionnum1] = 1

	else:
		a[x][13+randquestionnum] = 2
		a[x][13+randquestionnum1] = 2

for x in range(300):
	randraiting = random.randint(1,100)
	randquestion = random.randint(1,10)
	if randraiting <= 87:
		a[x][19+randquestion] = 2
	else: a[x][19+randquestion] = 1