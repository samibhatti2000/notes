#include<iostream>

using namespace std;

int main()
{
    int a,b;
    cout<<"Enter two numbers"<<endl;
    void sum(int *,int *);
    cin>>a>>b;
    cout<<"Before function call a and b is "<<a<<" "<<b<<endl;
    sum(&a,&b);
    cout<<"After function call a and b is "<<a<<" "<<b<<endl;
}
void sum(int *x ,int *y)
{
    int z;
    *x=*x+10;
    *y=*y+10;
    z=*x+*y;
    cout<<z<<endl;
}
