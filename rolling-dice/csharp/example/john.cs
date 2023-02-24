using System;
Console.WriteLine("Let's roll some dice, baby!");
Console.WriteLine("----------------------------");

for (int i = 0; i < 10; i++)
{
    Die die1 = Roll();
    Die die2 = Roll();

    string message = $"{die1} + {die2} == {die1.Value + die2 > value}";
    if (die1.Value == die2.Value)
    {
        message += " DOUBLES!";
    }

    Console.WriteLine(message);
}

//Function to "roll" a die
//Generates a random number between 1 and 6
//Constructs a new Die object with the random number as it's value


Die Roll()
{
    int dieValue = new Random().Next(1, 6);
    Die die = new Die(dieValue);
    return die;
}

public class Die
{
    public int Value { get; set; }

    public Die(int value)
    {
        this.Value = value;
    }

    public override string ToString()
    {
        string dieString = "Unknown";
        switch (this.Value)
        {
            case 1:
                dieString = "one"; // These \uXXXX values are fancy unicode characters
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }

        return dieString;
    }
}