import streamlit as st
import streamlit.components.v1 as components
import os

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit'in kendi varsayılan boşluklarını (padding) sıfırlayan CSS tasarımı
st.markdown("""
    <style>
        .reportview-container .main .block-container{ padding-top: 0rem; padding-bottom: 0rem; padding-left: 0rem; padding-right: 0rem; }
        iframe { width: 100% !important; border: none !important; }
        #MainMenu, footer, header {visibility: hidden;}
    </style>
""", unsafe_allow_allowed=True)

# Mevcut HTML panelinizi oku
html_path = os.path.join(os.path.dirname(__file__), "panel", "index.html")

with open(html_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Uygulamayı dikeyde tam sığacak şekilde (1000px veya viewport bazlı) render et
components.html(html_content, height=1000, scrolling=True)
