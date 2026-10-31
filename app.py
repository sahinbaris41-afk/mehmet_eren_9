import streamlit as st
import shutil
import os

# Sayfayı tam ekran genişliğinde başlat
st.set_page_config(page_title="Mehmet Eren Çalışma Masası", layout="wide", initial_sidebar_state="collapsed")

# Streamlit varsayılan kenar boşluklarını sıfırlayan CSS
st.markdown("""
    <style>
        .block-container { padding: 0rem !important; }
        iframe { width: 100% !important; height: 100vh !important; border: none !important; }
        #MainMenu, footer, header { visibility: hidden; }
    </style>
""", unsafe_allow_html=True)

# Sunucu üzerinde dinamik olarak 'static' klasörünü oluştur ve panel içeriğini kopyala
root_dir = os.path.dirname(__file__)
source_dir = os.path.join(root_dir, "panel")
target_dir = os.path.join(root_dir, "static")

if os.path.exists(source_dir) and not os.path.exists(target_dir):
    shutil.copytree(source_dir, target_dir)

# Tüm CSS, JS ve veri dosyalarıyla birlikte kırılmadan tam ekran render et
st.components.v1.iframe(src="/static/index.html", height=900, scrolling=True)
