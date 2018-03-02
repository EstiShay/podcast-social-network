import urllib.request
import xmltodict
import json

# FOR PARSING EXAMPLES
r = 'https://podcasts.opb.org/rss/tol'
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
    for i in list:
        episode_list.append({'title': i['title'],
                             'audio_link': i['enclosure']['@url'],
                             'pub_date': i['pubDate'],
                             'description': i['description']
                             }
                            )
    return episode_list

#
# episodes = xmlToJson(r)
# ep_list = UrlFinder(episodes)
# #
# for i in episodes:
#     print(i.keys())
