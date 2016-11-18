---
title: Protocols

permalink: /protocols/
stylesheets: flexbox-gallery
category: navigation
---
# {{ page.title }}

<ul class ="flex-container">
{% for page in site.pages %} 
    {% if page.category == 'protocol' %}
      <li class ="flex-item">
        <a class="page-link" href="{{ page.url | prepend: site.baseurl }}">{{ page.title }}
        </a>
    </li>
    {% endif %} 
{% endfor %}
</ul>