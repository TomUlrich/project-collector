## Conditional Rendering

> How to **render JSX elements conditionally** using the `if` statement, logical AND operator (`&&`), and logical OR operator (`||`).

<br>

**Return different JSX elements based on a condition:**

```jsx
// 1. if statement

if (completed) {
  return <div key={id}>{title} ✔</div>
}

return <div key={id}>{title} ✖</div>
```

<br>

**Render elements conditionally within JSX:**

```jsx
// 2.1 ternary operator	#1

return completed ? (
  <div key={id}>{title} ✔</div>
) : (
  <div key={id}>{title} ✖</div>
)
```

<br>

```jsx
// 2.2 ternary operator	#2

return (
  <div key={id}>
    {title}
    {completed ? " ✔" : " ✖"}
  </div>
)
```

<br>

```jsx
// 3 logical AND / OR operator

return (
  <div key={id}>
    {title}
    {completed && " ✔"}
    {completed || " ✖"}
  </div>
)
```
