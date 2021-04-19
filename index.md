---
layout: default
title: Start
---
<h1>Posts</h1>
<div>
{% for post in site.posts %}
    <div>
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        {{ post.teaser }}
    </div>
{% endfor %}
</div>