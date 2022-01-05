#grade calculator
sub1 = int(input("enter mark of first subjest:\n"))
sub2 = int(input("enter mark of second subjest:\n"))
sub3 = int(input("enter mark of third subjest:\n"))
sub4 = int(input("enter mark of fourth subjest:\n"))
sub5 = int(input("enter mark of fifth subjest:\n"))
sub6 = int(input("enter mark of sixth subjest:\n"))

subL = []
fsub = subL.count(4)

if(sub1<40):
    subL.append(4) 
if(sub2<40):
    subL.append(4)
if(sub3<40):
    subL.append(4)
if(sub4<40):
    subL.append(4)
if(sub5<40):
    subL.append(4)
if(sub6<40):
    subL.append(4)

#-----------------------------------
avg = round((sub1+sub2+sub3+sub4+sub5+sub6)/6)
bool1 = True
if(sub1<40 or sub2<40 or sub3<40 or sub4<40 or sub5<40 or sub6<40):
    bool1 = False
    print("you are fail in",subL.count(4), "subject", "and youur avg is:", avg,"%" )

if(bool1):
   if(avg<40):
       print("you avg is", avg,"%", "fail" )
   elif(avg>40 and avg<60):
       print("you avg is", avg,"%", "grade: c pass" )   
   elif(avg>60 and avg<70):
       print("you avg is", avg,"%", "grade: B pass" )
   elif(avg>70 and avg<90):
       print("you avg is", avg,"%", "grade: A pass" )
   elif(avg>90 and avg<100):
       print("you avg is", avg,"%", "grade: A+ pass" )
   else:
       print("your average is undifinable")    
