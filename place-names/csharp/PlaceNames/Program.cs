using System;
using System.Linq;
using System.Collections.Generic;

// We must specify the Type of the "names" variable.
//  It is a "List" that can only contain "strings".
List<string> names = new List<string> {
    "Fort Smith", "Mena", "Acorn", "The back yard", "Earth",
    "Nashville", "San Diego", "The Walmart", "The Great Wall of China"
};

//Print some output to the terminal (aka "Console");
Console.WriteLine("All Place Names");


// Iterate over each "name" in the "names" list
foreach (string name in names)
{
    Console.WriteLine(name);
}
//When you don't pass an argument o the Console.WriteLine it simply prints outputs a blank line. 
//Here we Console.WriteLine to add a little space around the output.

Console.WriteLine();

//Filter the list to create a new list that only has
//place names that start with the word "The"

List<string> theNames = names.Where(name => name.StartsWith("The")).ToList();

Console.WriteLine("'The' Place Names");
foreach (string name in theNames)
{
    Console.WriteLine(name);
}

