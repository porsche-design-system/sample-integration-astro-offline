# p-input-number accessibility integration examples

## Integration examples

### Placeholder used as the only label

#### ❌ Anti-pattern

```html
<p-input-number name="speed" placeholder="Top speed" unit="kmh"></p-input-number>
```

#### ✅ Recommended

```html
<p-input-number name="speed" label="Top speed" unit="kmh" description="Enter the maximum speed in kilometers per hour."></p-input-number>
```

### Hidden label without accessible name

#### ❌ Anti-pattern

```html
<p-input-number name="speed" hide-label="true"></p-input-number>
```

#### ✅ Recommended

```html
<p-input-number name="speed" hide-label="true" label="Top speed"></p-input-number>
```

### Validation feedback via state and message API

#### ❌ Anti-pattern

```html
<p-input-number name="speed" label="Top speed" aria-invalid="true" message="Invalid"></p-input-number>
```

#### ✅ Recommended

```html
<p-input-number name="speed" label="Top speed" unit="kmh" description="Enter the maximum speed in kilometers per hour." state="error" message="Enter a speed between 0 and 350 kilometers per hour."></p-input-number>
```
