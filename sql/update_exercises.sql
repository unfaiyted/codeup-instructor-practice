#Write SELECT statements to output each of the following with a caption:
USE codeup_test_db;


# All albums in your table.
Select * from albums a;

UPDATE albums a
SET sales = (sales * 10);

Select * from albums a;

# All albums released before 1980
Select * from albums a WHERE release_date > 1980;

UPDATE albums a
SET release_date = 1800
WHERE
        release_date > 1980;


Select * from albums a WHERE release_date > 1980;;


# All albums by Michael Jackson
Select * from albums a WHERE artist = 'Michael Jackson';

UPDATE albums a
SET artist = 'Peter Jackson'
WHERE
        artist = 'Michael Jackson';

# All albums by Michael Jackson
Select * from albums a WHERE artist = 'Michael Jackson';


# After each SELECT add an UPDATE statement to:
# Make all the albums 10 times more popular (sales * 10) xxx
# Move all the albums before 1980 back to the 1800s. xxxx
# Change 'Michael Jackson' to 'Peter Jackson'
# Add SELECT statements after each UPDATE so you can see the results of your handiwork.
