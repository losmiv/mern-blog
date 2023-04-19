## Some useful commands


Breaking up image URL:
```sql
    SELECT SUBSTRING_INDEX(SUBSTRING_INDEX(image, '/photos/', -1), '.jpeg', 1) AS image_filename posts;
```
