
---

## App Router files

### `app/layout.js`
```js
export const metadata = {
  title: "CoachOS",
  description: "Soccer Session Planner (Next.js starter)"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial, sans-serif" }}>
        <header style={{ padding: "12px 16px", borderBottom: "1px solid #e5e7eb" }}>
          <strong>CoachOS</strong>
          <nav style={{ display: "inline-block", marginLeft: 16 }}>
            <a href="/" style={{ marginRight: 12 }}>Home</a>
            <a href="/compose">Compose</a>
          </nav>
        </header>
        <main style={{ padding: 16 }}>{children}</main>
      </body>
    </html>
  );
}
