/*
This is the Player class. It handles the player's movement and actions.
*/
using UnityEngine;
public class Player : MonoBehaviour
{
    public float speed;
    private Rigidbody2D rb;
    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    private void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");
        rb.velocity = new Vector2(moveX * speed, moveY * speed);
    }
}