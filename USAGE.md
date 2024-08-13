<!-- Start SDK Example Usage [usage] -->
```typescript
import { Statsig } from "statsig";

const statsig = new Statsig({
    statsigApiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await statsig.dynamicConfigs.create({
        dynamicConfigCreateDto: {
            idType: "userID",
            name: "<value>",
        },
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->