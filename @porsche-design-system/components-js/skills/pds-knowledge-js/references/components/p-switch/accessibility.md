# p-switch accessibility integration examples

## Integration examples

### Switch without descriptive label

#### ❌ Anti-pattern

```html
<p-switch name="notifications"></p-switch>
```

#### ✅ Recommended

```html
<p-switch name="notifications">
  Email notifications for order updates
</p-switch>
```

### Hidden label without accessible name

#### ❌ Anti-pattern

```html
<p-switch name="notifications" hide-label="true"></p-switch>
```

#### ✅ Recommended

```html
<p-switch name="notifications" hide-label="true">
  Email notifications for order updates
</p-switch>
```
