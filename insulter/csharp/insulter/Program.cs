using System;
using System.Collections.Generic;

namespace insulter
{
    class Program
    {
        static void Main(string[] args)
        {
            //Blank List to house Random Affirmations
            List<int> indexes = new List<int> { };

            List<string> affirmations = new List<string>
         {
            "The past has no power over me anymore.",
            "I muster up more hope and courage from deep inside me.",
            "I choose to see the light that I am to this world.",
            "I may not understand the good in this situation but it is there.",
            "I replace my anger with understanding and compassion.",
            "I am beautiful and smart and that's how everyone sees me.",
            "I choose to find hopeful and optimistic ways to look at this.",
            "I attempt all - not some - possible ways to get unstuck."
         };


            //generate a Random number and return that value when invoked.
            int getRandom(int min, int max)
            {
                int genRand = new Random().Next(min, max);
                return genRand;
            }

            /*display a single affirmation when invoked
            an array of affirmations is passed to it and a 
            random number to pick which affirmation is displayed.*/


            void Display(List<string> affirmations, int Random)
            {
                Console.WriteLine($"{affirmations[Random]}");
            }

            //Clears the screen for the console.
            Console.Clear();



            while (indexes.Count < 3)
            {
                int candidate = getRandom(0, affirmations.Count - 1);
                if (!indexes.Contains(candidate))
                {

                    indexes.Add(candidate);
                }

            };

            for (int x = 0; x < indexes.Count; x++)
            {
                int index = indexes[x];

                Display(affirmations, index);
            }



        }
    }
}
