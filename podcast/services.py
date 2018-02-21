import urllib.request
import xmltodict
import json

r = 'http://www.espn.com/espnradio/podcast/feeds/itunes/podCast?id=6907276'
rss = urllib.request.urlopen(r)
rss_string = json.dumps(xmltodict.parse(rss))
rss_json = json.loads(rss_string)


def xmlToJson(rss_url):
    rss = urllib.request.urlopen(rss_url)
    rss_string = json.dumps(xmltodict.parse(rss))
    rss_json = json.loads(rss_string)
    rss_url = rss_json['rss']['channel']['item']
    return rss_url


def UrlFinder(list):
    episode_list = []
    # episode_data = {}
    # episode_data['title'] = ''
    # episode_data['audio_link'] = ''
    for i in list:
        episode_list.append({'title': i['title'],
                             'audio_link': i['enclosure']['@url'],
                             'pub_date': i['pubDate'],
                             'description':i['description']}
                            )
    return episode_list

my_list = xmlToJson(r)
data = UrlFinder(my_list)
for i in data:
    print(i)
    print('----')

# for i in xmlToJson(r):
#     # print(i)
#     print(i.keys())
#     print(i['enclosure'])
#     print(i['enclosure']['@url'])
#     # print(i['itunes:title'])
#     print("----")
#
#     # print(i['enclosure']['@url'])
#     #     print("---")
#
#     # print(len(rss_json['rss']['channel']['item']))
