import urllib.request
import xmltodict
import json


r = 'http://www.espn.com/espnradio/podcast/feeds/itunes/podCast?id=6907276'
rss = urllib.request.urlopen(r)
rss_string = json.dumps(xmltodict.parse(rss))
rss_json = json.loads(rss_string)



# print(rss_json['rss']['channel']['item'])

# episode_list = rss_json['rss']['channel']['item']
#
# for i in episode_list:
#     print(i['title'])
#     print(i['enclosure']['@url'])
#     print("---_-___--__-")


def audioUrlFinder(rss_url):
    rss = urllib.request.urlopen(rss_url)
    rss_string = json.dumps(xmltodict.parse(rss))
    rss_json = json.loads(rss_string)
    rss_url = rss_json['rss']['channel']['item']
    return rss_url

for i in audioUrlFinder(r):
    print(i['enclosure']['@url'])
    print("---")

# print(len(rss_json['rss']['channel']['item']))




