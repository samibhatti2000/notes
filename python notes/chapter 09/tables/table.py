for i in range(2, 20):
    with open(f"D:\\python first\chapter 09\\tables\\multiplication_table_of_{i}.txt", 'w') as f:
        for j in range(1,11):
                f.write(f"{i}X{j}={i*j}\n")
            
