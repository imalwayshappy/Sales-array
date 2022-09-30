"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//the for iterator through the regions
let i,j;


//Total Sales variable 
let totalSales = 0;


//Calculate sales by Quarter
document.write("<h2> Sales by Quarter</h2><br>");
//This loop will help us to move through each Quarter 
for(i = 0; i < 4; i++)
{
    //We sum all the Quarters by all the regions in totalSales
    totalSales = totalSales + region1[i] +region2[i] + region3[i] + region4[i] + region5[i];
    //We print the result of the Quarter 
    document.write("<p> Q" + (i+1) + ": $" + totalSales + "</p>");
    //We reset totalSales to zero in order to sum the next Quarter
    totalSales = 0;
}

//Calculate Sales by Region
document.write("<h2> Sales by Region</h2><br>");
//This for will allow us to move through the regions
for(i = 1; i <= 5; i++)
{
    //We reset totalSales to zero in order to sum the next region
    totalSales = 0;
    //This for will llow us to move throguh the Quarters of each region
    for(j = 0; j < 4; j++)
    {
        //We evaluate i to sum the Quarter of the actual region
        if(i==1)
        {
            //if i = 1 we sum the region1 in the index j
           totalSales = totalSales + region1[j];
        }
        else if(i==2)
        {
           totalSales = totalSales + region2[j];
        }
        else if(i==3)
        {
           totalSales = totalSales + region3[j];
        }
        else if(i==4)
        {
           totalSales = totalSales + region4[j];
        }
        else if(i==5)
        {
           totalSales = totalSales + region5[j];
        }
    
    
    }
    //We print the total Sales of the present region
    document.write("<p>Region" + i + ": $" + totalSales + "</p>");
}
 





//Calculate Total Sales in all regions
//We reset the totalSales to zero in order to sum the Total Sales in all regions
totalSales = 0;
//This loop will allow us to move through all the Quarters of all the regions
for(i = 0; i < 4; i++)
{
    //Sum of all the regions in the present quarter
    totalSales = totalSales + region1[i] +region2[i] + region3[i] + region4[i] + region5[i];
}

//We print the total Sales of all the regions
document.write("<h2> Total Sales </h2><br>");
document.write("<p> $" + totalSales + "</p>");