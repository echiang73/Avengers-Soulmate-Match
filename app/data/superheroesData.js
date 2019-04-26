var profileArray = [
    {
      "userName": "Steve Rogers",
      "superHeroName": "Captain America",
      "userPhoto": "http://pngimg.com/uploads/captain_america/captain_america_PNG22.png",
      "scores": [5,5,5,5,5,5,5,5,5,5]
    },{
      "userName": "Bruce Banner",
      "superHeroName": "Hulk",
      "userPhoto": "https://3.bp.blogspot.com/-OLjAdhSua5Q/V1IT490TRgI/AAAAAAAAEIc/r_udNs2fTgMyw1Ph3Ql_wgUSByxbMdDwQCLcB/s1600/hulkfsdg.png",
      "scores": [1,1,1,1,1,3,1,1,5,1]
    },{
      "userName": "Peter Parker",
      "superHeroName": "Spider-Man",
      "userPhoto": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04b9f74d-7625-49bd-bf36-f062c6818e42/das5mf1-b7586d40-d427-46a5-9a28-dd8046f977b2.png/v1/fill/w_591,h_1352,strp/spider_man__homecoming_png_by_hollandftmendes_das5mf1-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE2MCIsInBhdGgiOiJcL2ZcLzA0YjlmNzRkLTc2MjUtNDliZC1iZjM2LWYwNjJjNjgxOGU0MlwvZGFzNW1mMS1iNzU4NmQ0MC1kNDI3LTQ2YTUtOWEyOC1kZDgwNDZmOTc3YjIucG5nIiwid2lkdGgiOiI8PTk0NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Sl57WjhnJpS32uBr6JeFPDxcTvaKLBJRFlwKgHCyEdA",
      "scores": [5,5,5,3,4,5,4,3,2,3]
    },{
      "userName": "Ima Supervillian",
      "superHeroName": "Thanos",
      "userPhoto": "https://banner2.kisspng.com/20180920/ve/kisspng-thanos-fortnite-battle-royale-fortnite-save-the-w-thanos-fortnite-wiki-5ba393c9daeec2.5962002115374468578968.jpg",
      "scores": [1,1,1,1,1,1,1,1,1,1]
    },{
      "userName": "Logan",
      "superHeroName": "Wolverine",
      "userPhoto": "https://www.pngarts.com/files/2/Wolverine-Transparent-Images.png",
      "scores": [2,2,2,3,2,2,3,2,5,3]
    },{
      "userName": "Scott Lang",
      "superHeroName": "Ant-Man",
      "userPhoto": "http://www.pngall.com/wp-content/uploads/2016/05/Ant-Man.png",
      "scores": [5,3,4,3,3,5,1,3,2,5]
    },{
      "userName": "Tony Stark",
      "superHeroName": "Iron Man",
      "userPhoto": "https://banner2.kisspng.com/20180404/lgw/kisspng-robert-downey-jr-iron-man-clip-art-robert-downey-jr-5ac482482f51b9.5165682615228278481938.jpg",
      "scores": [5,5,5,3,4,5,2,4,2,2]
    },{
      "userName": "Carol Danvers",
      "superHeroName": "Captain Marvel",
      "userPhoto": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/dcncwke-92bb476f-f118-4d41-b09e-c46559acc06c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGNuY3drZS05MmJiNDc2Zi1mMTE4LTRkNDEtYjA5ZS1jNDY1NTlhY2MwNmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2FFLkRqE2pZquFRwwoqPPZsa87WXbm_2DpoShTKzA5g",
      "scores": [5,5,4,5,4,4,4,4,2,4]
    },{
      "userName": "Stephen Strange",
      "superHeroName": "Doctor Strange",
      "userPhoto": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/dahhytf-7f302b6f-2dbc-41ee-99fa-1571452bf696.png/v1/fill/w_745,h_1073,strp/dr__strange_character_png_by_mintmovi3_dahhytf-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ3NSIsInBhdGgiOiJcL2ZcLzg0NmE5MDg2LThhNDAtNDNlMC1hYTEwLTJmYzdkNmQ3MzczMFwvZGFoaHl0Zi03ZjMwMmI2Zi0yZGJjLTQxZWUtOTlmYS0xNTcxNDUyYmY2OTYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.eFgGgdm2Z8F1JrVIrlfKwd2pDzmAgT3xKT3uKn8EhZU",
      "scores": [5,4,5,3,4,5,5,5,2,5]
    },{
      "userName": "Thor Odinson",
      "superHeroName": "God of Thunder",
      "userPhoto": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b8d2b12-21e8-4931-8a6d-fb9ecdd60383/dcms8il-7bfb1d76-d63a-45e3-824d-215d1a05104a.png/v1/fill/w_776,h_1029,strp/avengers_endgame_thor_png_by_metropolis_hero1125_dcms8il-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA0NiIsInBhdGgiOiJcL2ZcLzViOGQyYjEyLTIxZTgtNDkzMS04YTZkLWZiOWVjZGQ2MDM4M1wvZGNtczhpbC03YmZiMWQ3Ni1kNjNhLTQ1ZTMtODI0ZC0yMTVkMWEwNTEwNGEucG5nIiwid2lkdGgiOiI8PTc4OSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZnjesWXhofJz60a1bGzdBiTUcaJ_hwF9vYCu2zXWtaQ",
      "scores": [5,5,2,4,2,2,2,3,3,5]
    }];
  
  module.exports = profileArray;