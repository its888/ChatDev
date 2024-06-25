/*
This is the main GameManager class. It handles the game's state, including scoring and game over conditions.
*/
using UnityEngine;
public class GameManager : MonoBehaviour
{
    public static GameManager instance;
    public int score;
    public bool gameOver;
    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
        }
    }
    private void Start()
    {
        score = 0;
        gameOver = false;
    }
    public void GameOver()
    {
        gameOver = true;
    }
    public void AddScore(int value)
    {
        score += value;
    }
}