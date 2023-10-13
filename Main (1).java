import java.util.*;
import java.io.*;
import java.lang.Math;

public class Main 
{
   public static void main(String args[]) 
   {
      Main obj = new Main();
      Scanner sc= new Scanner(System.in); 
      System.out.print("Enter a Roman Number: ");  
      String str= sc.nextLine(); 
      System.out.println("The Integer value is: "+obj.Fn(str));
   } 
   int Value(char roman) 
   {
      if (roman == 'I')
         return 1;
      if (roman == 'V')
         return 5;
      if (roman == 'X')
         return 10;
      if (roman == 'L')
         return 50;
      if (roman == 'C')
         return 100;
      if (roman == 'D')
         return 500;
      if (roman == 'M')
         return 1000;
      return -1;
   }
   int Fn(String str) 
   {
      int sum = 0;
      for (int i=0; i<str.length(); i++) 
      {
         int x = Value(str.charAt(i));
         if (i+1 <str.length()) 
         {
           int y = Value(str.charAt(i+1));
           if (x >= y) 
           {
              sum = sum + x;
           }
           else
           {
              sum = sum - x;
           }
        }
        else 
        {
           sum = sum + x;
        } 
     }  
     return sum;
   }
} 