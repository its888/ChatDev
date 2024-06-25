/*
This is the UIController class. It handles updating the game's UI, such as the score display.
*/
using UnityEngine;
using UnityEngine.UI;
public class UIController : MonoBehaviour
{
    public Text scoreText;
    private void Update()
    {
        scoreText.text = "Score: " + GameManager.instance.score;
    }
}